import checkReviewToxicity from "./toxicityCheck.js";

import { createReview } from "../models/review.Model.js";

export const createReviewController = async (req, res) => {
  const { rating, comment,type } = req.body;

  try {
    if (!rating) {
      return res.status(400).json({ message: "Rating is required" }); 
    }

    let toxicityResult = [];

    if (comment && comment.trim() !== "") {
      toxicityResult = await checkReviewToxicity(comment);
      console.log("Raw Hugging Face Response:", JSON.stringify(toxicityResult));
    }

    // 1. تحويل المصفوفة المتداخلة [[ ... ]] إلى مصفوفة مفردة [ ... ] بأمان تام
    let finalArray = [];
    if (Array.isArray(toxicityResult)) {
      finalArray = toxicityResult.flat(); // دالة flat تضمن دمج المستويات برمجياً
    }

    // 2. فحص النتيجة على المصفوفة بعد تسطيحها
    if (finalArray.length > 0) {
      const isToxic = finalArray.some(
        (item) =>
          ["toxic", "severe_toxic", "obscene", "insult"].includes(item.label) &&
          item.score > 0.7
      );

      if (isToxic) {
        // نرسل حالة 400 ليفهم الـ Frontend أن العملية رُفضت بسبب المحتوى
        return res.status(400).json({ message: "The comment contains bad words" });
      }
    } else if (toxicityResult && toxicityResult.error) {
      console.warn("Hugging Face API Warning:", toxicityResult.error);
    }

    // 3. الحفظ في قاعدة البيانات في حال تخطي الفحص
    await createReview({ rating, comment,type });

    return res.status(201).json({ message: "Review add is done" });
  } catch (err) {
    console.error("Controller Error:", err.message);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};


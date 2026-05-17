async function checkReviewToxicity(reviewText) {
    // الرابط المباشر للنموذج من Hugging Face
    const url = "https://router.huggingface.co/hf-inference/models/unitary/toxic-bert";
    
    // تأكد من وضع مفتاح الحساب (Token) الخاص بك هنا أو قراءته من ملف بيئة .env
    const hfToken = process.env.HF_TOKEN ; 

    const response = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${hfToken}`,
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ inputs: reviewText })
    });

    const result = await response.json();
    return result;
}

// مثال على كيفية استدعائها لتجربتها:
checkReviewToxicity("I like you. I love you").then(response => {
    console.log("النتيجة من النموذج:", JSON.stringify(response, null, 2));
});

export default checkReviewToxicity
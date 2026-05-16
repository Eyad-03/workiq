import {
  getCategoryById,
  getAllCategories,
  createCategory,
  deleteCategory,
} from "../models/category.model.js";

export const getAllCategoryController = async (req, res) => {
  try {
    const categories = await getAllCategories();

    if (!categories) {
      return res
        .status(200)
        .json({ message: "Category is empty", categories: [] });
    }

    return res
      .status(200)
      .json({ message: "Fetch Category successfully", categories: categories });
  } catch (err) {
    console.error(err.message);
  }
};

export const getCategoryByIdController = async (req, res) => {
  const category_id = req.params;

  try {
    const category = await getCategoryById(category_id);

    if (category.length === 0) {
      return res.status(404).json({ message: "Not Found " });
    }

    return res
      .status(201)
      .json({ message: "Fetch category successfully", category: category });
  } catch (err) {
    console.error(err.message);
  }
};

export const createCategoryController = async (req, res) => {
  const { category_name, category_description, image_url } = req.body;

  try {
    const newCategory = await createCategory({
      category_name,
      category_description,
      image_url,
    });
    return res.status(201).json({ message: "new category add" });
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteCategoryController = async (req, res) => {
  const { catid } = req.params;

  try {
    const categories = await deleteCategory(catid);

    return res.status(201).json({ message: "delete category done" });
  } catch (err) {
    console.error(err.message);
  }
};

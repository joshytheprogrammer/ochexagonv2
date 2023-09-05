import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";

export async function fetchTestimonials() {
  try {
    const querySnapshot = await getDocs(collection(firestore, "testimonials"));
    const testimonials = [];
    querySnapshot.forEach((doc) => {
      testimonials.push({ id: doc.id, data: doc.data() });
    });
    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
}

export async function fetchTeamTestimonials() {
  try {
    const querySnapshot = await getDocs(
      collection(firestore, "teamTestimonials")
    );
    const testimonials = [];
    querySnapshot.forEach((doc) => {
      testimonials.push({ id: doc.id, data: doc.data() });
    });
    return testimonials;
  } catch (error) {
    console.error("Error fetching team testimonials:", error);
    throw error;
  }
}

export async function fetchBlog() {
  try {
    const querySnapshot = await getDocs(collection(firestore, "blog"));
    const blog = [];
    querySnapshot.forEach((doc) => {
      blog.push({ id: doc.id, data: doc.data() });
    });
    return blog;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}


export async function fetchProducts() {
  try {
    const querySnapshot = await getDocs(collection(firestore, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, data: doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

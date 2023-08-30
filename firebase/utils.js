import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase';

export async function fetchTestimonials() {
  try {
    const querySnapshot = await getDocs(collection(firestore, 'testimonials'));
    const testimonials = [];
    querySnapshot.forEach((doc) => {
      testimonials.push({ id: doc.id, data: doc.data() });
    });
    return testimonials;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error; // You can handle the error in the component using this thrown error
  }
}

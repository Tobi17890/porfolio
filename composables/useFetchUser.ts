// composables/useFetchUsers.ts
import { ref } from 'vue';
import { collection, getDocs, Firestore } from 'firebase/firestore';

export function useFetchUsers(db: Firestore) {
  const users = ref([]);

  async function fetchUsers() {
    const usersSnapshot = await getDocs(collection(db, "users"));
    const users = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
     ...doc.data(),
    }));
  }

  fetchUsers();

  return { users };
}
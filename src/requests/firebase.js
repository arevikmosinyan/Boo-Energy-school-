import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAnJCtbdt-9-6_ZGlurh4Xor3la00DO7iQ',
  authDomain: 'boo-project-b1b88.firebaseapp.com',
  projectId: 'boo-project-b1b88',
  storageBucket: 'boo-project-b1b88.appspot.com',
  messagingSenderId: '468575333197',
  appId: '1:468575333197:web:d726f2b32b5dfec0bf2504',
  measurementId: 'G-M9V3SZ8VMN',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase();

export function writeUserData({
  name,
  surname,
  email,
  gender,
  role,
  country,
  educationCenter,
  scoreForReading,
  alreadyReadClassesIds,
  alreadyReadClassesTitles,
}) {
  set(ref(database, 'users/' + email.replace('.', ',')), {
    name,
    surname,
    email,
    gender,
    role,
    country,
    educationCenter,
    scoreForReading,
    alreadyReadClassesIds,
    alreadyReadClassesTitles,
  });
}

export async function getUserData(email) {
  const snapshot = await get(ref(database, 'users/' + email.replace('.', ',')));
  const result = await snapshot.val();
  return result;
}

firebase.initializeApp({
  apiKey: "AIzaSyAU7z2nh3hSS1gCy0MXkMxcQqaHlkljfFk",
  authDomain: "checkit-95307.firebaseapp.com",
  databaseURL: "https://checkit-95307.firebaseio.com",
  projectId: "checkit-95307",
  storageBucket: "checkit-95307.appspot.com",
  messagingSenderId: "1045440825060",
  appId: "1:1045440825060:web:11001fcfcac030c6"
});

const db = firebase.firestore();

function listen(name, collection) {
  db.collection(name).onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const id = change.doc.id;
      const data = change.doc.data();
      if (change.type === 'added') {
        collection.push({ id, ...data });
      } else if (change.type === 'modified') {
        const member = collection.find((m) => m.id === id);
        Object.assign(member, data);
      }
    });
  });
}

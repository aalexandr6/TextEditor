//https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
//
import { openDB } from "idb";

const initdb = async () =>
  //create the database
  openDB("jate", 1, {
    //upgrade the database if needed
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      //create a new object store
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error("putDb not implemented");

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error("getDb not implemented");

initdb();

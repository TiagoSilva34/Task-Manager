export const setDataLocalStorage = (key: any, item: any) => {
    if (!localStorage) return 

    try {
      return localStorage.setItem(key, JSON.stringify(item))
    } catch (err) {
      console.error(`Error getting item ${key} from localStorage`, err);
    }
}

export const getDataLocalStorage = (key: any) => {
  if (!localStorage) return 

  try {
    return JSON.parse(localStorage.getItem(key) as string)
  } catch (err) {
    console.error(`Error storing item ${key} to localStorage`, err);
  }
}

export const removeItemLocalStorage = (key: any) => {
  if (!localStorage) return 

  try {
    return localStorage.removeItem(key)
  } catch (err) {
    console.error(`Error storing item ${key} to localStorage`, err);
  }
}



// export const getData = (key: any) => {
//   if (!localStorage) return

//   try {
//     return JSON.parse(localStorage.getItem(key) as string)
//   } catch (err) {
// 		console.error(`Error getting item ${key} from localStorage`, err);
//   }
// }

// export const setData = (key: any, item: any) => {
//   if (!localStorage) return

//   try {
//     return localStorage.setItem(key, JSON.stringify(item))  
//   } catch (err) {
//     console.error(`Error storing item ${key} to localStorage`, err);
//   }
// }

// export const removeData = (key: any) => {
//   if(!localStorage) return 

//   try {
//     return localStorage.removeItem(key)
//   } catch(err) {
//     console.error(`Error storing item ${key} to localStorage`, err);
//   }
// }
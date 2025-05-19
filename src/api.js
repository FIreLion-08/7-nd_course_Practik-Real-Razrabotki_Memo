import axios from "axios";

export async function postTransaction(token, newTransaction) {
  try {
    const data = await axios.post(
      "https://wedev-api.sky.pro/api/transactions",
      newTransaction,
      {
        headers: {
          "Content-Type": "text/html",
          Authorization: "Bearer " + token,
        },
      }
    );
    
    return data.data.transactions;
  } catch (error) {
    throw new Error(error.message);
  }
}
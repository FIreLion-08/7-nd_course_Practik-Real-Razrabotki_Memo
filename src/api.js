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

export async function filteredAndSort(filtred, sort, token) {
  try {
    const response = await axios.get(
      `https://wedev-api.sky.pro/api/transactions?sortBy=${sort}&filterBy=${filtred}`,
      {
       
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "text/html",
        }
      }
    );
    return response.data
    
    
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function filtered(filtred, token) {
  try {
    const response = await axios.get(
      `https://wedev-api.sky.pro/api/transactions?filterBy=${filtred}`,
      {
       
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "text/html",
        }
      }
    );
    return response.data
    
    
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function sorted(sort, token) {
  try {
    const response = await axios.get(
      `https://wedev-api.sky.pro/api/transactions?sortBy=${sort}`,
      {
       
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "text/html",
        }
      }
    );
    return response.data
    
    
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function expensesPeriod(dates, token) {
  try {
    const response = await axios.post(
      'http://wedev-api.sky.pro/api/transactions/period',
          { 
          start: dates.start,
          end: dates.end
      } ,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "text/html",
        }
      }
    );
    return response.data
  } catch (error) {
    throw new Error(error.message);
  }
}
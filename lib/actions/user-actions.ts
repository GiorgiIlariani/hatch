import { url } from "../utils";

export const registerUser = async ({ 
    title = "Giorgi", 
    description = "description", 
    skills = ["HTML", "CSS"]
}) => {
    try {
      const response = await fetch(`${url}/profiles/`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          skills,
        })
      });

    if (!response.ok) {
      throw new Error('Failed to authenticate user');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};
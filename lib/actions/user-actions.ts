import { url } from "../utils";

interface RegisterUserProps {
  title: string;
  description: string;
  skills: string[];
}

export const registerUser = async ({
  title,
  description,
  skills,
}: RegisterUserProps) => {
  const skillsIndexes = skills.map((skill, index) => index);

  try {
    const response = await fetch(`${url}/profiles/`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        skills: skillsIndexes,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to authenticate user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
};

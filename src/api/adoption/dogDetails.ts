// src/api/adoption/dogDetails.ts

import {
	ApiResponse,
	DogPost,
	DogDetails,
} from "@/interfaces/adoption/dogDetails";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getDogDetails(dogId: number): Promise<DogDetails> {
	const response = await fetch(`${API_URL}/dogs/${dogId}`);
	if (!response.ok) {
		throw new Error("Failed to fetch dog details");
	}
	const data: ApiResponse<DogPost> = await response.json();
	return data.result.bomInfo;
}

export async function updateDogDetails(
	dogId: number,
	details: Partial<DogDetails>
): Promise<DogDetails> {
	const response = await fetch(`${API_URL}/dogs/${dogId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(details),
	});
	if (!response.ok) {
		throw new Error("Failed to update dog details");
	}
	const data: ApiResponse<DogPost> = await response.json();
	return data.result.bomInfo;
}

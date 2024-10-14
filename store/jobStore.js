import axios from "axios";
import { create } from "zustand";

export const useJobStore = create((set, get) => ({
    totalJobs: [],
    jobCategory: [],
    next_cursor: null,
    isLoading: false,
    error: null,

    getNewJobs: async () => {
        set({ isLoading: true, error: null });
        try {
            const nextCursor = get().next_cursor;
            const response = await axios.get(
                `https://jsonfakery.com/jobs/infinite-scroll`,
                {
                    params: {
                        cursor: nextCursor,
                    },
                }
            );
            console.log(
                "🚀 ~ getNewJobs: ~ response: next_cursor:",
                response.data.next_cursor
            );

            const newJobs = response.data?.data || [];

            const newJobCategories = newJobs.map((item) => item.job_category);

            // Combine existing categories with new categories
            const currentCategories = get().jobCategory;
            const updatedCategories = [
                ...new Set([...currentCategories, ...newJobCategories]),
            ];

            set((state) => ({
                totalJobs: [...state.totalJobs, ...newJobs],
                jobCategory: updatedCategories,
                next_cursor: response.data?.next_cursor,
                isLoading: false,
            }));
        } catch (error) {
            set({
                error: error.response?.data?.message || "Something went wrong",
                isLoading: false,
            });
            throw error;
        }
    },
}));

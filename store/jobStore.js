import axios from "axios";
import { create } from "zustand";

export const useJobStore = create((set, get) => ({
    totalJobs: [],
    next_cursor: null,
    isLoading: false,
    error: null,

    getNewJobs: async () => {
        set({ isLoading: true, error: null });
        try {
            const nextCursor = get().next_cursor; // Get the current next_cursor from the state
            // console.log("🚀 ~ getNewJobs: ~ nextCursor:", nextCursor)

            const response = await axios.get(
                `https://jsonfakery.com/jobs/infinite-scroll`,
                {
                    params: {
                        cursor: nextCursor,
                    },
                }
            );
            console.log(
                "🚀 ~ getNewJobs: ~ response:",
                response.data.next_cursor
            );

            const newJobs = response.data?.data || [];

            set((state) => ({
                totalJobs: [...state.totalJobs, ...newJobs],
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

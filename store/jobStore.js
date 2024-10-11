import axios from "axios";
import { create } from "zustand";

export const useJobStore = create((set) => ({
    totalJobs: [],
    next_cursor: "",
    isLoading: false,
    error: null,

    getNewJobs: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get(
                `https://jsonfakery.com/jobs/infinite-scroll`
            );
            // console.log("🚀 ~ getNewJobs: ~ response:", response.data);
            set({
                totalJobs: response.data.data,
                next_cursor: response.data.next_cursor,
                isLoading: false,
            });
        } catch (error) {
            set({
                error: error.response.data.message || "Something went wrong",
                isLoading: false,
            });
            throw error;
        }
    },
}));

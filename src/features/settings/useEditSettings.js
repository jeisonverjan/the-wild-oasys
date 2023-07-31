import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import { toast } from "react-hot-toast";

export function useEditSettings() {
  const queryClient = useQueryClient();
  const {
    isLoading: isEditing,
    error,
    mutate: editSetting,
  } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Setting successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, error, editSetting };
}

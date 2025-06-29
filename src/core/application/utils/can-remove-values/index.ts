export const canRemoveValues = <T extends object>(
    obj: any,
    valuesToRemove: any[],
    can: boolean
) => {
    if (!can) return obj as T;
    return Object.fromEntries(
        Object.entries(obj).filter(
            ([_, value]) => !valuesToRemove.includes(value)
        )
    ) as T;
};

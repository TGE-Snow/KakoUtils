export declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    interface String {
        newGuid(): string
    }
    interface Date {
        addDays(days: Number): Date
    }
}


export interface IRepository<T>
{
    /**
     * Creates and persists any entity.
     * @param entity T
     */
    create<T>(entity: T): number;

    /**
     * Fetches a filtered array of entity of type T.
     * @returns Array<T> where T is the entity in question
     */
    getAll<T>(): Array<T>;

    /**
     * Finds an entity given the entity's primary key.
     * @param id number
     * @returns T
     */
    getById<T>(id: number): T;

    /**
     * Apply's changes to the entity in question.
     * @param tEntity T
     * @return id of tentity that has changed.
     */
    update<T>(tEntity: T): number;

    /**
     * Action that deletes an entity from persistence.
     * @param id 
     * @returns void
     */
    delete<T>(id: number): void;
}

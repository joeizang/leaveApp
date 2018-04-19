import { Leave } from "models/leave";
import { Connection, getConnection, EntityManager, Repository } from "typeorm";


export class LeaveDataService
{

    private _db: Repository<Leave>;

    constructor()
    {
        this._db = getConnection().getRepository(Leave);
    }

    /**
     * applyForLeave
     */
    public applyForLeave(leave: Leave) 
    {
        if(leave !== null)
        {
            this._db.create(leave);
        }
    }
}

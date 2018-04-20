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
    public applyForLeave(leave: Leave): void 
    {
        if(leave !== null)
        {
            let entity = this._db.create(leave);
            this._db.save(entity);
        }
    }

    /**
     * getAllLeaves
     */
    public async getAllLeaves(): Promise<Array<Leave>>
    {
        let leaves = this._db.find({
            select: ["leaveDays","casualLeaveDays","id","staff","leaveType","endorsedBy","approvedBy"],
            relations: ["staff", "leaveType"],
            skip: 5,
            take: 15
        });

        return leaves;
    }
}

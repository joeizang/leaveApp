import { Leave } from "../models/leave";
import {Staff} from "../models/staff";
import { Connection, getConnection, EntityManager, Repository, getManager } from "typeorm";

export class LeaveDataService {
    private _db: Repository<Leave>;

    constructor() {
        this._db = getManager().getRepository(Leave);
    }

    /**
     * applyForLeave
     */
    public applyForLeave(leave: Leave): void {
        if(leave !== null) {
            let entity: Leave  = this._db.create(leave);
            this._db.save(entity);
        }
    }

    /**
     * getAllLeaves
     */
    public async getAllLeaves(): Promise<Array<Leave>> {
        let leaves: Promise<Array<Leave>> = this._db.find({
            select: ["leaveDays","casualLeaveDays","id","staff","leaveType","endorsedBy","approvedBy"],
            relations: ["staff", "leaveType"],
            skip: 5,
            take: 15
        });

        return leaves;
    }
    /**
     * get single leave by leave id
     * @param leave
     */
    public async getLeave(leave: Leave): Promise<Leave> {
        let fetchedLeave: Leave | undefined = await this._db.findOneById(leave.id);
        if(typeof fetchedLeave === "undefined") {
            throw new Error("Record not found.");
        } else {
            return fetchedLeave;
        }
    }

    /**
     * get all leaves of a staff
     * @param staff
     */
    public async getOneStaffLeaves(staff: Staff): Promise<Array<Leave>> {
        let leaves: Promise<Array<Leave>> = this._db.find({
            select:["leaveDays","casualLeaveDays","id","staff","leaveType","endorsedBy","approvedBy"],
            relations:["staff", "leaveType"],
            where:{
                staff:staff
            }
        });
        return leaves;
    }
}

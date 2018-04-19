import { Entity, PrimaryGeneratedColumn, Index, ManyToOne, Column, OneToOne } from "typeorm";
import { Staff } from "models/staff";
import { LeaveType } from "models/leaveType";

@Entity()
export class Leave
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    leaveDays: number;

    @Column()
    casualLeaveDays: number;

    @Column({ type: "boolean"})
    approval: boolean;

    @Column({ type: "varchar", length: 50 })
    endorsedBy: string;

    @Column({ type: "varchar", length: 50 })
    approvedBy: string;

    @ManyToOne(type => Staff, staff => staff.leave)
    staff: Staff;

    @OneToOne(type => LeaveType)
    leaveType: LeaveType;
}

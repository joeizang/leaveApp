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

    @ManyToOne(type => Staff, staff => staff.leave)
    staff: Staff;

    @OneToOne(type => LeaveType)
    leaveType: LeaveType;
}

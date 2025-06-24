import { IsDecimal, IsDefined, IsOptional, IsUUID } from 'class-validator';

export class CreateBillDetailDto {
  @IsUUID()
  @IsOptional()
  dishes_id?: string;

  @IsUUID()
  @IsOptional()
  bill_id?: string;

  @IsUUID()
  @IsOptional()
  add_id?: string;

  @IsUUID()
  @IsOptional()
  souces_id?: string;

  @IsUUID()
  @IsOptional()
  drinks_id?: string;

  @IsUUID()
  @IsOptional()
  chips_id?: string;

  @IsOptional()
  @IsDecimal()
  total?: string;

  @IsDefined()
  @IsUUID()
  created_by: string;
}

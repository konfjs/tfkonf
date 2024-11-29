import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRdsReservedInstanceArgs {
  instance_count?: number;
  offering_id: string;
  reservation_id?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
}
export class aws_rds_reserved_instance extends TerraformResource {
  readonly arn!: string;
  readonly currency_code!: string;
  readonly db_instance_class!: string;
  readonly duration!: number;
  readonly fixed_price!: number;
  readonly id?: string;
  readonly lease_id!: string;
  readonly multi_az!: boolean;
  readonly offering_type!: string;
  readonly product_description!: string;
  readonly recurring_charges!: any[];
  readonly start_time!: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly usage_price!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsReservedInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_rds_reserved_instance");
  }
}
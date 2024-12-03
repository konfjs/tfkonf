import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRedshiftDataShareConsumerAssociationArgs {
  allow_writes?: boolean;
  associate_entire_account?: boolean;
  consumer_arn?: string;
  consumer_region?: string;
  data_share_arn: string;
}
export class aws_redshift_data_share_consumer_association extends TerraformResource {
  readonly id!: string;
  readonly managed_by!: string;
  readonly producer_arn!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftDataShareConsumerAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_data_share_consumer_association");
  }
}
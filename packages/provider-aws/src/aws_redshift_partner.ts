import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRedshiftPartnerArgs {
  account_id: string;
  cluster_identifier: string;
  database_name: string;
  partner_name: string;
}
export class aws_redshift_partner extends TerraformResource {
  readonly id?: string;
  readonly status!: string;
  readonly status_message!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftPartnerArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_partner");
  }
}
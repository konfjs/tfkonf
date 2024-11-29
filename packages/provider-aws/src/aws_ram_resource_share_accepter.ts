import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsRamResourceShareAccepterArgs {
  share_arn: string;
  timeouts: Timeouts;
}
export class aws_ram_resource_share_accepter extends TerraformResource {
  readonly id?: string;
  readonly invitation_arn!: string;
  readonly receiver_account_id!: string;
  readonly resources!: string[];
  readonly sender_account_id!: string;
  readonly share_id!: string;
  readonly share_name!: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRamResourceShareAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_ram_resource_share_accepter");
  }
}
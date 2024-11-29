import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsTransferSshKeyArgs {
  body: string;
  server_id: string;
  user_name: string;
}
export class aws_transfer_ssh_key extends TerraformResource {
  readonly id?: string;
  readonly ssh_key_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsTransferSshKeyArgs) {
    super(config, "resource", args, resourceName, "aws_transfer_ssh_key");
  }
}
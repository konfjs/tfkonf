import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDirectoryServiceSharedDirectoryAccepterArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDirectoryServiceSharedDirectoryAccepterArgs {
  shared_directory_id: string;
  timeouts: AwsDirectoryServiceSharedDirectoryAccepterArgsTimeouts;
}
export class aws_directory_service_shared_directory_accepter extends TerraformResource {
  readonly id?: string;
  readonly method!: string;
  readonly notes!: string;
  readonly owner_account_id!: string;
  readonly owner_directory_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDirectoryServiceSharedDirectoryAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_directory_service_shared_directory_accepter");
  }
}
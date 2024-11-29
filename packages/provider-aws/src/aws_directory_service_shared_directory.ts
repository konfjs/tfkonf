import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDirectoryServiceSharedDirectoryArgstarget {
  id: string;
  type?: string;
}
export interface AwsDirectoryServiceSharedDirectoryArgstimeouts {
  delete?: string;
}
export interface AwsDirectoryServiceSharedDirectoryArgs {
  directory_id: string;
  method?: string;
  notes?: string;
  target: AwsDirectoryServiceSharedDirectoryArgstarget;
  timeouts: AwsDirectoryServiceSharedDirectoryArgstimeouts;
}
export class aws_directory_service_shared_directory extends TerraformResource {
  readonly id?: string;
  readonly shared_directory_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDirectoryServiceSharedDirectoryArgs) {
    super(config, "resource", args, resourceName, "aws_directory_service_shared_directory");
  }
}
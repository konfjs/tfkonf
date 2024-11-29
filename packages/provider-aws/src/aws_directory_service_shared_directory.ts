import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDirectoryServiceSharedDirectoryArgsTarget {
  id: string;
  type?: string;
}
export interface AwsDirectoryServiceSharedDirectoryArgsTimeouts {
  delete?: string;
}
export interface AwsDirectoryServiceSharedDirectoryArgs {
  directory_id: string;
  method?: string;
  notes?: string;
  target: AwsDirectoryServiceSharedDirectoryArgsTarget;
  timeouts?: AwsDirectoryServiceSharedDirectoryArgsTimeouts;
}
export class aws_directory_service_shared_directory extends TerraformResource {
  readonly id?: string;
  readonly shared_directory_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDirectoryServiceSharedDirectoryArgs) {
    super(config, "resource", args, resourceName, "aws_directory_service_shared_directory");
  }
}
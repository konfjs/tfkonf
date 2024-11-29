import { TerraformConfig, TerraformResource } from "tfs";
export interface Target {
  id: string;
  type?: string;
}
export interface Timeouts {
  delete?: string;
}
export interface AwsDirectoryServiceSharedDirectoryArgs {
  directory_id: string;
  method?: string;
  notes?: string;
  target: Target;
  timeouts: Timeouts;
}
export class aws_directory_service_shared_directory extends TerraformResource {
  readonly id?: string;
  readonly shared_directory_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDirectoryServiceSharedDirectoryArgs) {
    super(config, "resource", args, resourceName, "aws_directory_service_shared_directory");
  }
}
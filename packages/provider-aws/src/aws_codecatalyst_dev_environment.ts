import { TerraformConfig, TerraformResource } from "tfs";
export interface Ides {
  name?: string;
  runtime?: string;
}
export interface PersistentStorage {
  size: number;
}
export interface Repositories {
  branch_name?: string;
  repository_name: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCodecatalystDevEnvironmentArgs {
  alias?: string;
  inactivity_timeout_minutes?: number;
  instance_type: string;
  project_name: string;
  space_name: string;
  ides: Ides;
  persistent_storage: PersistentStorage;
  repositories: Repositories;
  timeouts: Timeouts;
}
export class aws_codecatalyst_dev_environment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodecatalystDevEnvironmentArgs) {
    super(config, "resource", args, resourceName, "aws_codecatalyst_dev_environment");
  }
}
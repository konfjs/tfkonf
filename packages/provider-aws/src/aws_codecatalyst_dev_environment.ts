import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCodecatalystDevEnvironmentArgsides {
  name?: string;
  runtime?: string;
}
export interface AwsCodecatalystDevEnvironmentArgsPersistentStorage {
  size: number;
}
export interface AwsCodecatalystDevEnvironmentArgsrepositories {
  branch_name?: string;
  repository_name: string;
}
export interface AwsCodecatalystDevEnvironmentArgstimeouts {
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
  ides: AwsCodecatalystDevEnvironmentArgsides;
  persistent_storage: AwsCodecatalystDevEnvironmentArgsPersistentStorage;
  repositories: AwsCodecatalystDevEnvironmentArgsrepositories;
  timeouts: AwsCodecatalystDevEnvironmentArgstimeouts;
}
export class aws_codecatalyst_dev_environment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodecatalystDevEnvironmentArgs) {
    super(config, "resource", args, resourceName, "aws_codecatalyst_dev_environment");
  }
}
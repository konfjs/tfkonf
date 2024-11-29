import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCodecatalystSourceRepositoryArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCodecatalystSourceRepositoryArgs {
  description?: string;
  name: string;
  project_name: string;
  space_name: string;
  timeouts: AwsCodecatalystSourceRepositoryArgstimeouts;
}
export class aws_codecatalyst_source_repository extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodecatalystSourceRepositoryArgs) {
    super(config, "resource", args, resourceName, "aws_codecatalyst_source_repository");
  }
}
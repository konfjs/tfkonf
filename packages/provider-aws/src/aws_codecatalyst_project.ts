import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCodecatalystProjectArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCodecatalystProjectArgs {
  description?: string;
  display_name: string;
  space_name: string;
  timeouts: AwsCodecatalystProjectArgstimeouts;
}
export class aws_codecatalyst_project extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodecatalystProjectArgs) {
    super(config, "resource", args, resourceName, "aws_codecatalyst_project");
  }
}
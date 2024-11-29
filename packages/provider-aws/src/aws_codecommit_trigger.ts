import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCodecommitTriggerArgsTrigger {
  branches?: string[];
  custom_data?: string;
  destination_arn: string;
  events: string[];
  name: string;
}
export interface AwsCodecommitTriggerArgs {
  repository_name: string;
  trigger: AwsCodecommitTriggerArgsTrigger;
}
export class aws_codecommit_trigger extends TerraformResource {
  readonly configuration_id!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodecommitTriggerArgs) {
    super(config, "resource", args, resourceName, "aws_codecommit_trigger");
  }
}
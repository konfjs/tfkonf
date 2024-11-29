import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsInspector2EnablerArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsInspector2EnablerArgs {
  account_ids: string[];
  resource_types: string[];
  timeouts: AwsInspector2EnablerArgstimeouts;
}
export class aws_inspector2_enabler extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsInspector2EnablerArgs) {
    super(config, "resource", args, resourceName, "aws_inspector2_enabler");
  }
}
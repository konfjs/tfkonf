import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleCloudfunctionsFunctionIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudfunctionsFunctionIamBindingArgs {
  cloud_function: string;
  members: string[];
  role: string;
  condition: GoogleCloudfunctionsFunctionIamBindingArgsCondition;
}
export class google_cloudfunctions_function_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudfunctionsFunctionIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_cloudfunctions_function_iam_binding");
  }
}
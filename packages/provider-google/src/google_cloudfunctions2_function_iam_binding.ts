import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudfunctions2FunctionIamBindingArgs {
  cloud_function: string;
  members: string[];
  role: string;
  condition: Condition;
}
export class google_cloudfunctions2_function_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudfunctions2FunctionIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_cloudfunctions2_function_iam_binding");
  }
}
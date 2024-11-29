import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSpannerInstanceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSpannerInstanceIamBindingArgs {
  instance: string;
  members: string[];
  role: string;
  condition: GoogleSpannerInstanceIamBindingArgsCondition;
}
export class google_spanner_instance_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSpannerInstanceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_spanner_instance_iam_binding");
  }
}
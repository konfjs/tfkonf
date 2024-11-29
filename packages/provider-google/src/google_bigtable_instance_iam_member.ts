import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigtableInstanceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigtableInstanceIamMemberArgs {
  instance: string;
  member: string;
  role: string;
  condition: GoogleBigtableInstanceIamMemberArgsCondition;
}
export class google_bigtable_instance_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableInstanceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_instance_iam_member");
  }
}
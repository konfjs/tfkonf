import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleProjectIamCustomRoleArgs {
  description?: string;
  permissions: string[];
  role_id: string;
  stage?: string;
  title: string;
}
export class google_project_iam_custom_role extends TerraformResource {
  readonly deleted!: boolean;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectIamCustomRoleArgs) {
    super(config, "resource", args, resourceName, "google_project_iam_custom_role");
  }
}
import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexLakeIamBindingArgs {
  lake: string;
  members: string[];
  role: string;
  condition: Condition;
}
export class google_dataplex_lake_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexLakeIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_lake_iam_binding");
  }
}
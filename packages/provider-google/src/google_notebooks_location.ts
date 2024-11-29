import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNotebooksLocationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNotebooksLocationArgs {
  name?: string;
  timeouts: GoogleNotebooksLocationArgstimeouts;
}
export class google_notebooks_location extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNotebooksLocationArgs) {
    super(config, "resource", args, resourceName, "google_notebooks_location");
  }
}
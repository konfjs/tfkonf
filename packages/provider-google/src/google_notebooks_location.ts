import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleNotebooksLocationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNotebooksLocationArgs {
  name?: string;
  timeouts?: GoogleNotebooksLocationArgsTimeouts;
}
export class google_notebooks_location extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNotebooksLocationArgs) {
    super(config, "resource", args, resourceName, "google_notebooks_location");
  }
}
import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNotebooksEnvironmentArgsContainerImage {
  repository: string;
  tag?: string;
}
export interface GoogleNotebooksEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNotebooksEnvironmentArgsVmImage {
  image_family?: string;
  image_name?: string;
  project: string;
}
export interface GoogleNotebooksEnvironmentArgs {
  description?: string;
  display_name?: string;
  location: string;
  name: string;
  post_startup_script?: string;
  container_image: GoogleNotebooksEnvironmentArgsContainerImage;
  timeouts: GoogleNotebooksEnvironmentArgsTimeouts;
  vm_image: GoogleNotebooksEnvironmentArgsVmImage;
}
export class google_notebooks_environment extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNotebooksEnvironmentArgs) {
    super(config, "resource", args, resourceName, "google_notebooks_environment");
  }
}
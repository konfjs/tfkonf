import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleContainerAnalysisNoteIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleContainerAnalysisNoteIamBindingArgs {
  members: string[];
  note: string;
  role: string;
  condition: GoogleContainerAnalysisNoteIamBindingArgsCondition;
}
export class google_container_analysis_note_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerAnalysisNoteIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_container_analysis_note_iam_binding");
  }
}
export {
  ExtendedViewingKey,
  ProofGenerationKey,
  PseudoExtendedKey,
} from "@namada/wasm";

type Address = string;
type NoteVal = string;
type AmountVal = string;
type NoteAndConv = [NoteVal, AmountVal?];
export type NotesAndConversions = Record<Address, NoteAndConv[]>;

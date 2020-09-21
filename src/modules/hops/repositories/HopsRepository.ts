import { uuid } from "uuidv4";

import Hop from "../entities/Hop";

class HopsRepository<Hop> {
  private hops: Hop[] = [];

  public async create({ hop_name, hop_type, hop_alpha_acid }): Hop {
    const hop = new Hop();

    hop.id = uuid();
    hop.hop_name = hop_name;
    hop.hop_type = hop_type;
    hop.hop_alpha_acid = hop_alpha_acid;

    this.hops.push(hop);

    return hop;
  }
}

export default HopsRepository;
